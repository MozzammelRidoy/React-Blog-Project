import profile from '../../assets/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center py-5 mx-10 border-b-2'>
            <h1 className="text-4xl font-bold">Knowladge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;