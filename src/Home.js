const Home = () => {
    const handleClick = (e) => {
        console.log("qr pai",e)
    }
    const handleClickAgain = (name) => {
        console.log(name)
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={ handleClick }>Click me</button>
            <button onClick = { handleClickAgain('casr')}>Click Again</button>
        </div>
    );
}
 
export default Home;