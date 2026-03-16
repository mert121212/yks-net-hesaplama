$headers = @{
    "Accept" = "application/json, text/event-stream"
    "Content-Type" = "application/json; charset=utf-8"
}

function Fetch-Programs($scoreType, $limit = 500) {
    $bodyObj = [ordered]@{
        jsonrpc = "2.0"
        method = "tools/call"
        id = 1
        params = [ordered]@{
            name = "search_bachelor_degree_programs"
            arguments = [ordered]@{
                score_type = $scoreType
                results_limit = $limit
            }
        }
    }
    $body = $bodyObj | ConvertTo-Json -Depth 10 -Compress
    $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)

    try {
        $response = Invoke-WebRequest -Uri "https://yokatlasmcp.fastmcp.app/mcp" -Method POST -Headers $headers -Body $bodyBytes -UseBasicParsing -TimeoutSec 60
        $content = [System.Text.Encoding]::UTF8.GetString($response.RawContentStream.ToArray())
        
        if ($content -match 'data: (\{.+\})') {
            $jsonStr = $matches[1]
            $data = $jsonStr | ConvertFrom-Json
            $text = $data.result.content[0].text
            return $text | ConvertFrom-Json
        }
        Write-Host "No match in response for $scoreType"
        return $null
    } catch {
        Write-Host "Error fetching $scoreType : $($_.Exception.Message)"
        return $null
    }
}

Write-Host "Fetching SAY programs..."
$say = Fetch-Programs "SAY" 500
Write-Host "SAY count: $($say.programs.Count)"

Start-Sleep -Seconds 2

Write-Host "Fetching EA programs..."
$ea = Fetch-Programs "EA" 500
Write-Host "EA count: $($ea.programs.Count)"

Start-Sleep -Seconds 2

Write-Host "Fetching SOZ programs..."
$soz = Fetch-Programs "SOZ" 500
Write-Host "SOZ count: $($soz.programs.Count)"

Start-Sleep -Seconds 2

Write-Host "Fetching DIL programs..."
$dil = Fetch-Programs "DIL" 200
Write-Host "DIL count: $($dil.programs.Count)"

$all = @()
if ($say -and $say.programs) { $all += $say.programs }
if ($ea -and $ea.programs) { $all += $ea.programs }
if ($soz -and $soz.programs) { $all += $soz.programs }
if ($dil -and $dil.programs) { $all += $dil.programs }

Write-Host "Total programs: $($all.Count)"
$all | ConvertTo-Json -Depth 10 | Out-File -FilePath "raw-universities.json" -Encoding UTF8
Write-Host "Saved to raw-universities.json"
