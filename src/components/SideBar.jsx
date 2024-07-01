export default function SideBar(props) {
    const { handleToggleModal, data } = props
    const footerStyle = {
        backgroundColor: 'inherit', // Blue color
        color: 'inherit',
        textAlign: 'center',
        padding: '15px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
      };
    
      const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s ease', // Smooth transition for hover effect
      };
    
      const hoverStyle = {
        color: '#ffcc00', // Gold color on hover
      };
    
      const handleMouseEnter = (e) => {
        Object.assign(e.target.style, hoverStyle);
      };
    
      const handleMouseLeave = (e) => {
        Object.assign(e.target.style, linkStyle);
      };
    
      const heartStyle = {
        color: 'red', // Red color for the heart icon
      };
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
               <div className="footerSidebar">
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                <footer style={footerStyle}>
      <p>
        Built with <span style={heartStyle}>&#9825;</span> by{' '}
        <a
          href="https://www.instagram.com/davidarmah992/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          David Nii Armah
        </a>
      </p>
    </footer>
                </div>
            </div>
        </div>
    )
}