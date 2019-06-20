$source = "\\CW_BLANDING\"
$target = "N:\SynologyBackup\"
$shares = @("Accounting","Accounting-HR","ADP Implementation","aggregate","Business Development","cci","CW Public","Executive","home","homes","hr","Production","Products","Projects","Scans","Shares","Strategy Development")

foreach ($share in $shares) {
ROBOCOPY "$source$share" "$target$share" /MIR
}
