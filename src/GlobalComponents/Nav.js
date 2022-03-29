import React, { useContext } from 'react';
import './style.css';
import './responsive.css';
import logo from './img/nav-arctics-logo.png';
import { ParamContext } from '../ContextReducer';
import { Link, useHistory } from 'react-router-dom';
import { handleLogout } from '../Axios/consulAxios';

export default function Nav() {
	const context = useContext(ParamContext)
	const history = useHistory()

	const navigateToLogin = () => {history.push('/login')}
	const navigateToProfile = () => {history.push(`/${context.Info.identity}-profile`)}
	const displayUnreadNumber = (a, n) => {
		if (a + n <= 0) {
			return []
		} else {
			if (a + n > 9) {
				return (
					<span className='nav__notify-count'>{'n'}</span>
				)
			} else {
				return (
					<span className='nav__notify-count'>{a + n}</span>
				)
			}
		}
	}
	const Logout = async () => {
		const {status, message} = await handleLogout()
		context.setLogin(false)
		context.setInfo({
			type: 'logout'
		})
		history.push('/')
	}

	console.log("Nav context: ", context)

	if (!context.isLogin) {
		// const handleScrollTop = (evt)=>document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
		// const handleScrollAbout = (evt)=>document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
		// const handleScrollFunction = (evt)=>document.querySelector('#function').scrollIntoView({ behavior: 'smooth' });
		// const handleScrollMembers = (evt)=>document.querySelector('#members').scrollIntoView({ behavior: 'smooth' });
		// const handleScrollContact = (evt)=>document.querySelector('#contact-us').scrollIntoView({ behavior: 'smooth' });

	    return(
        	<nav className="rwd-hide">
		    	<img className="nav__logo" src={logo} alt="arctics" width="224px" height="41px"></img>
		    	<div className="nav__right">
			    	<ul className="nav__menu">
				    	<li className="nav__menu-item"><a href="https://www.arctics.academy/#top">首頁</a></li>
				    	<li className="nav__menu-item"><a href="https://www.arctics.academy/#about-us">關於我們</a></li>
				    	<li className="nav__menu-item"><a href="https://www.arctics.academy/#function">平台優勢</a></li>
				    	<li className="nav__menu-item"><a href="https://www.arctics.academy/#members">團隊成員</a></li>
				    	<li className="nav__menu-item" ><a href="https://www.arctics.academy/#contact-us">聯絡我們</a></li>
			    	</ul>
					<button className="nav__action-button" onClick={navigateToLogin}>註冊 / 登入</button>
		    	</div>
	    	</nav>
    	);
	} else {
		if (context.Info.identity === 'consultant') {
			return (
				<nav className="rwd-hide">
		    		<img className="nav__logo" src={logo} alt="arctics" width="224px" height="41px"></img>
		    		<div className="nav__right">
			    		<ul className="nav__menu">
				   		 	<li className="nav__menu-item" onClick={() => {console.log(context.Info)}}><Link to='/consultant-home'>首頁</Link></li>
				   		 	<li className="nav__menu-item">
								<Link to='/consultant-announcement'><a>
									通知 
									{displayUnreadNumber(context.Info.announcements.unreadCount,context.Info.notifications.unreadCount)}
								</a></Link>
							</li>
				   		 	<li className="nav__menu-item"><Link to='/consultant-schedule/list'><a>我的諮詢</a></Link>
								<ul className='nav__menu-submenu'>
									<Link to='/consultant-schedule/calender'><li className='nav__menu-submenu-item'>行事曆</li></Link>
									<Link to='/consultant-schedule/list'><li className='nav__menu-submenu-item'>所有諮詢</li></Link>
									{/* <li className='nav__menu-submenu-item'>請假</li> */}
								</ul>
							</li>
							<Link to='/consultant-purse/receipt'><li className="nav__menu-item"><a className='nav__menu-menu-item'>我的錢包</a></li></Link>
								{/* <ul className='nav__menu-submenu'>
									<Link to='/consultant-purse/receipt'><li className='nav__menu-submenu-item'>帳戶明細</li></Link>
									<li className='nav__menu-submenu-item'>提領</li>
								</ul> */}
				   		 	<li className="nav__menu-item" onClick={navigateToProfile}><a>個人檔案</a></li>
								{/* <ul className='nav__menu-submenu'>
									<li className='nav__menu-submenu-item'>常用題庫</li>
									<li className='nav__menu-submenu-item'>網站導覽</li>
									<li className='nav__menu-submenu-item'>FAQ</li>
									<li className='nav__menu-submenu-item'>問題回報</li>
								</ul> */}
			    		</ul>
						<button className="nav__action-button" onClick={Logout}>登出</button>
		    		</div>
	    		</nav>
			)
		} else if (context.Info.identity === 'student') {
			return (
				<nav className="rwd-hide">
		    		<img className="nav__logo" src={logo} alt="arctics" width="224px" height="41px"></img>
		    		<div className="nav__right">
			    		<ul className="nav__menu">
				   		 	<li className="nav__menu-item" onClick={() => {console.log(context.Info)}}><a>首頁</a></li>
				   		 	<li className="nav__menu-item">
									<a>
									通知 <span className='nav__notify-count'>9</span>
									</a>
							</li>
							<li className="nav__menu-item"><a className='nav__menu-submenu-link'>尋找顧問</a>
								<ul className='nav__menu-submenu'>
									<li className='nav__menu-submenu-item'>搜尋</li>
									<li className='nav__menu-submenu-item'>好奇清單</li>
								</ul>
							</li>
				   		 	<li className="nav__menu-item"><a className='nav__menu-submenu-link'>我的諮詢</a>
								<ul className='nav__menu-submenu'>
									<li className='nav__menu-submenu-item'>我的行事曆</li>
									<li className='nav__menu-submenu-item'>未來排程</li>
									<li className='nav__menu-submenu-item'>請假</li>
								</ul>
							</li>
				   		 	<li className="nav__menu-item"><a className='nav__menu-submenu-link'>我的錢包</a>
								<ul className='nav__menu-submenu'>
									<li className='nav__menu-submenu-item'>付款紀錄</li>
									<li className='nav__menu-submenu-item'>優惠</li>
								</ul>
							</li>
				   		 	<li className="nav__menu-item" ><a className='nav__menu-submenu-link'>小幫手</a>
								<ul className='nav__menu-submenu'>
									<li className='nav__menu-submenu-item'>常用題庫</li>
									<li className='nav__menu-submenu-item'>網站導覽</li>
									<li className='nav__menu-submenu-item'>FAQ</li>
									<li className='nav__menu-submenu-item'>問題回報</li>
								</ul>
							</li>
			    		</ul>
						<button className="nav__action-button" onClick={navigateToProfile}>個人檔案</button>
		    		</div>
	    		</nav>
			)
		}
	}
}

//<button className="nav__action-button">註冊 / 登入</button> => temporarily removed