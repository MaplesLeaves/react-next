import Router from 'next/router'
import axios from 'axios'
import {Button} from 'antd'
import './../static/index.css'
const NextInfo = ({ list }) => {
	const goin = () => {
		Router.push('/home')
	}
	let name = '张三'
	const goin1 = () => {
		// name = 'zjdadang'
	}
	goin1();
	return (
		<>
			{
				list.map((item) => {
					return <p>{item}</p>
				})
			}
			<Button type="default">dfasfdas</Button>

			<p onClick={goin}>{name}下一个页面</p>
			<style jsx>
				{`
        p{
					background: red;
					margin:0;
					margin-bottom: 10px
				}
    `}
			</style>
		</>
	)
}

NextInfo.getInitialProps = async () => {
	const promise = new Promise((resolve) => {
		// axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
		// 		(res)=>{
		// 				console.log('远程数据结果：',res)
		// 		}
		// )
		resolve({ list: ['dada', 'das'] })

	})
	return await promise
}

export default NextInfo