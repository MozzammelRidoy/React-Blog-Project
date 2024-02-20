import profile from '../../assets/2212image_1700032725.524 (12).png';
const Header = () => {
    return (
        <header className='flex justify-between items-center px-10 md:px-0 py-5 max-w-5xl mx-auto border-b-2'>
            <h1 className="text-3xl md:text-4xl font-bold">Knowladge Cafe</h1>
            <img className='w-16 h-16 rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;