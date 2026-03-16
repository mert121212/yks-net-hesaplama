$headers = @{
    "Accept" = "application/json, text/event-stream"
    "Content-Type" = "application/json"
}

$body = @{
    jsonrpc = "2.0"
    method = "tools/call"
    id = 2
    params = @{
        name = "search_bachelor_degree_programs"
        arguments = @{
            score_type = "SAY"
            results_limit = 50
        }
    }
} | ConvertTo-Json -Depth 10

$response = Invoke-WebRequest -Uri "https://yokatlasmcp.fastmcp.app/mcp" -Method POST -Headers $headers -Body $body -UseBasicParsing -TimeoutSec 30
Write-Host "Status: $($response.StatusCode)"
Write-Host "Size: $($response.Content.Length)"
$response.Content.Substring(0, [Math]::Min(3000, $response.Content.Length))
