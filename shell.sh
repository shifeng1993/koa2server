# 启动node进程
pm2 start app.js
echo '程序正在启动，请稍候...'
#脚本休眠3s，等待进程启动
sleep 3
echo '程序已启动'
while [ 1 ]
do	
	# 判断当前程序进程pid，如果pid不存在则重启，存在则进行下一步
	if [ ! pid ]
	then
		pm2 restart app.js
		echo '程序启动失败，正在重启，请稍候...'
		# 正在重启进程，脚本休眠2s
		sleep 2
	else
		pid=$(ps -e |grep '[0-9].node./'|awk '{print $1}')
	fi

	# 获取当前程序所占用CPU负载
	CPU=$(pm2 prettylist |grep memory |cut -d : -f 4 |cut -d } -f 1)
	let i++
	# 显示当前程序所占用CPU负载
	# echo $i:当前占用CPU:%$CPU

	# 若进程pid不存在或进程所占CPU负载超过98%，重启当前进程
	if [ ! pid -o $CPU -gt 98 ]
	then
		pm2 restart app.js
		echo '程序正在重启，请稍候...'
		# 正在重启进程，脚本休眠2s
		sleep 2
	fi
	#脚本休眠1s
	sleep 5
done
