import { Strategy } from '@yieldhive/database';

export const template = (strategy: Strategy) => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: '#fff',
				display: 'flex',
				position: 'relative',
				fontFamily: 'Inter, sans-serif',
			}}
			className="og-image-container"
		>
			<div
				style={{
					height: '100%',
					width: '100%',
					backgroundColor: 'transparent',
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111b3' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='1.2' cy='1.2' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
					<svg style={{ width: '45px', height: '45px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 81">
						<path
							fill="#6E64DD"
							stroke="#6E64DD"
							stroke-width="8"
							d="M4 14.087L19.887 5l15.887 9.087v16.777L19.887 39.95 4 30.864V14.087zM48.226 14.087L64.113 5 80 14.087v16.777L64.113 39.95l-15.887-9.087V14.087zM26.22 49.63l15.887-9.088 15.887 9.088v16.776l-15.887 9.087-15.887-9.087V49.63z"
						></path>
					</svg>

					<h1 style={{ fontSize: '40px', color: '#6E64DD', fontWeight: '900' }}>YieldHive</h1>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px' }}>
					<h2 style={{ fontSize: '20px', fontWeight: '900', color: '#271E8A', letterSpacing: '.15rem' }}>
						MULTIPLY YOUR CRYPTO WHILE YOU SLEEP
					</h2>
				</div>
				<div
					style={{
						flex: '1',
						background: '#6E64DD',
						margin: '0 40px',
						borderRadius: '8px 8px 0 0',
						display: 'flex',
						flexDirection: 'column',
						padding: '0px 20px',
						color: '#fff',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<h2 style={{ fontSize: '35px', fontWeight: '900' }}>{strategy?.name}</h2>
						<h2 style={{ fontSize: '35px', fontWeight: '900' }}>APY</h2>
					</div>
					<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '-20px' }}>
						<h2 style={{ fontSize: '48px', fontWeight: '900' }}>{strategy?.apy}%</h2>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: '-25px' }}>
							{strategy?.tokens.map((token) => (
								<img
									style={{
										height: '50px',
										width: '50px',
									}}
									src={token.logo_url}
								/>
							))}
							{/* <div style={{ height: '50px', width: '50px', background: '#fff', borderRadius: '5000px', border: '2px solid #6E64DD' }}></div>
							<div style={{ height: '50px', width: '50px', background: '#fff', borderRadius: '5000px', border: '2px solid #6E64DD' }}></div>
							<div style={{ height: '50px', width: '50px', background: '#fff', borderRadius: '5000px', border: '2px solid #6E64DD' }}></div> */}
						</div>
						<div style={{ display: 'flex', alignItems: 'center', gap: '-25px' }}>
							{strategy?.protocols.map((protocol) => (
								<img
									style={{
										height: '50px',
										width: '50px',
									}}
									src={protocol.image_url}
								/>
							))}

							{/* <div style={{ height: '50px', width: '50px', background: '#fff', borderRadius: '5000px', border: '2px solid #6E64DD' }}></div>
							<div style={{ height: '50px', width: '50px', background: '#fff', borderRadius: '5000px', border: '2px solid #6E64DD' }}></div> */}
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					background: 'radial-gradient(50% 50% at 50% 50%, #6E64DD 0%, rgba(110, 100, 221, 0.00) 100%)',
					height: '500px',
					width: '500px',
					borderRadius: '5000px',
					position: 'absolute',
					top: '-250px',
					left: '-300px',
					zIndex: '50000',
				}}
			></div>
			<div
				style={{
					background: 'radial-gradient(50% 50% at 50% 50%, #6E64DD 0%, rgba(110, 100, 221, 0.00) 100%)',
					height: '500px',
					width: '500px',
					borderRadius: '5000px',
					position: 'absolute',
					bottom: '-250px',
					right: '-200px',
					zIndex: '50000',
				}}
			></div>
		</div>
	);
};
