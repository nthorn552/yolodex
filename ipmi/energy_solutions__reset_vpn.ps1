# FUNCTIONS
function Get-VpnConnection-List-By-Address([string]$TargetAddress) {
  return @(
    (Get-VpnConnection | Where-Object {$_.ServerAddress -eq $TargetAddress}),
    (Get-VpnConnection -AllUserConnection | Where-Object {$_.ServerAddress -eq $TargetAddress})
  )
}

# CONSTANTS
$vpn_server_address = 'vpn.energy-solution.com'

Echo "Finding VPNs to reset"
$vpn_connection_list = Get-VpnConnection-List-By-Address $vpn_server_address
Echo "VPNs to reset:" $vpn_connection_list

Echo ""
Echo "Starting VPN resets"
Foreach ($connection in $vpn_connection_list)
{
  $connection | Set-VpnConnection -RememberCredential 1 -ServerAddress "$vpn_server_address" -TunnelType L2tp -EncryptionLevel Optional -AuthenticationMethod Pap -L2tpPsk "VPN@3n3rgyL2TP!" -Force
}

Echo ""
Echo "Switching encrpyption to Required in user rasphone.pbk file..."
(Get-Content C:\Users\*\AppData\Roaming\Microsoft\Network\Connections\Pbk\rasphone.pbk) | ForEach-Object { $_ -replace "DataEncryption=8", "DataEncryption=256" } | Set-Content C:\Users\*\AppData\Roaming\Microsoft\Network\Connections\Pbk\rasphone.pbk

Echo ""
Echo "Switching encrpyption to Required in default rasphone.pbk file, if it exists..."
(Get-Content C:\ProgramData\Microsoft\Network\Connections\Pbk\rasphone.pbk) | ForEach-Object { $_ -replace "DataEncryption=8", "DataEncryption=256" } | Set-Content C:\ProgramData\Microsoft\Network\Connections\Pbk\rasphone.pbk
Echo "VPN reset complete"

Echo "VPNs after reset:" (Get-VpnConnection-List-By-Address $vpn_server_address)
