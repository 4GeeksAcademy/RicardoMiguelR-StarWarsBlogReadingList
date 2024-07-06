import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer py-3 text-end mt-5">
		<div className="container" style={{color: 'white'}}>
			<p className="text-footer">
				Made with <i className="bi bi-suit-heart-fill" style={{color: 'red'}}></i> <span style={{color: 'rgb(53, 222, 228)'}}>by Ricardo Miguel Raya</span>
			</p>
			<p>4Geeks Academy student</p>
			<a href="https://4geeksacademy.com/es/desarrollador-full-stack/desarrollo-de-software-en-latam" target="blank">
				<img src="https://media.licdn.com/dms/image/D560BAQFmDm4C6hymwQ/company-logo_200_200/0/1693577833799/4geeksacademy_logo?e=2147483647&v=beta&t=DQS8WRITL9lws6l7tiUTKxx7W2gKqGNdV7Z_LE5LE1c" className="img-4geeks" width="55px" />
			</a>
		</div>
	</footer>
);
