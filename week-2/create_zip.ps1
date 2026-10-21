# ==============================================================================
# Helper Script to Generate Assignment Submission ZIP
# Format: WD_Week2_YourName.zip
# Usage: powershell -ExecutionPolicy Bypass -File .\create_zip.ps1 -StudentName "YourName"
# Example: powershell -ExecutionPolicy Bypass -File .\create_zip.ps1 -StudentName "RahulSharma"
# ==============================================================================

param (
    [string]$StudentName = "StudentName"
)

$targetDir = $PSScriptRoot
$zipFileName = "WD_Week2_${StudentName}.zip"
$zipFilePath = Join-Path -Path $targetDir -ChildPath $zipFileName

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Internnova Internship - Week 2: CSS Fundamentals" -ForegroundColor Yellow
Write-Host " Packaging assignment into $zipFileName..." -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# Remove old zip if already exists
if (Test-Path $zipFilePath) {
    Remove-Item $zipFilePath -Force
    Write-Host "Removed existing zip file." -ForegroundColor DarkGray
}

# Collect files to compress (excluding git files and zip itself)
$filesToZip = Get-ChildItem -Path $targetDir -Exclude "*.zip", ".git*" | Select-Object -ExpandProperty FullName

try {
    Compress-Archive -Path $filesToZip -DestinationPath $zipFilePath -Force
    Write-Host ""
    Write-Host "[SUCCESS] Submission ZIP created successfully!" -ForegroundColor Green
    Write-Host "File Name: $zipFileName" -ForegroundColor White
    Write-Host "Location : $zipFilePath" -ForegroundColor White
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Yellow
    Write-Host "1. Upload '$zipFileName' to your Google Drive." -ForegroundColor White
    Write-Host "2. Enable 'Anyone with the link can view' permission." -ForegroundColor White
    Write-Host "3. Submit the Google Drive share link on the internship portal." -ForegroundColor White
    Write-Host "==========================================================" -ForegroundColor Cyan
} catch {
    Write-Host "[ERROR] Failed to generate zip archive: $_" -ForegroundColor Red
}
