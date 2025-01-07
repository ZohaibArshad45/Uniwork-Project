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
                            <img className='rounded-full h-7 w-7 object-cover' src= 'data:image/jpeg;base64,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' alt='profile' />
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
