import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <header className="bg-slate-100 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to='/'>
                    <h1 className="font-bold text-lg sm:text-2xl">
                        <span className="text-blue-900">Uni</span>
                        <span className="text-stone-700">Work</span>
                    </h1>
                </Link>
                <form className="bg-slate-50 rounded-xl p-2 flex items-center ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent focus:outline-none w-24 sm:w-64"
                    />
                    {/* npm i react-icons */}
                    <FaSearch className="text-stone-700" />
                </form>
                <ul className="flex gap-2 sm:gap-6 font-semibold text-stone-800">
                    <Link to='/'> <li className="hidden sm:inline hover:text-blue-900">Home</li></Link>
                    <Link to='/about'> <li className="hidden sm:inline hover:text-blue-900">About</li></Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                        ) : (
                            <li className=' text-slate-700 hover:underline'> Sign in</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
