const RessourceCardComponent = ({ placeholder }: { placeholder: string }) => {
	return (
		<div
			style={{
				width: '100%',
				height: '400px',
				border: '1px solid black',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#fcfcfc',
				padding: '10px',
			}}
		>
			<p>{placeholder}</p>
		</div>
	);
};
export default RessourceCardComponent;
