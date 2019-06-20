$cmd = ".\ipmiutil.exe"
$cmdArgs = @(
  "power",
  "-N","192.168.3.18",
  "-U","admin",
  "-P","delicatespecial",
  "-u"
)

Write-Output "TEST 1"

.\ipmiutil.exe power -N 192.168.3.18 -U admin -P delicatespecial -u

& $cmd $cmdArgs
