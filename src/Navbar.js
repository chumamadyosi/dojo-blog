const Navbar = () => {
  const pink={
    color:"white",
    backgroundColor:'#f1356d',
    borderRadius:'8px'
  }
    return ( 
      <nav className="navbar">
        <h1>The Dojo</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="create">New Blog</a>

        </div>
        </nav>
     );
}
 
export default Navbar;