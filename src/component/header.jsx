export const Header = () => {
    return (
        <header className="p-3 text-bg-dark border-bottom border-secondary">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <span className="fs-5 fw-bold text-white">Dashboard</span>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search"> 
                        <input type="search" className="form-control form-control-dark text-bg-dark border-secondary" placeholder="Search global feed..." aria-label="Search"/> 
                    </form>
                </div>
            </div>
        </header>
    );
};
export default Header;