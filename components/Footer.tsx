function Footer() {
    return (
        <footer className='bg-black text-white h-auto w-auto mt-2 py-6'>
            <div className='max-w-6xl mx-auto px-4'>
                <p className='text-center'>&copy; {new Date().getFullYear()} Round Up Reviews. All Rights Reserved.</p>
                <div className='flex flex-row justify-center mt-4 text-center'>
                <p className='text-white mx-2'>Created By:</p>
                <a href='https://grant-bentley-portfolio.netlify.app/' className='text-gray-400 hover:text-white'>Grant Bentley</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer