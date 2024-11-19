"use client"
import { Button, Navbar, TextInput} from 'flowbite-react'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun} from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const Header = () => {

    const pathname: string = usePathname()
    const {theme, setTheme} = useTheme()
    
    const handleClick = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <Navbar className='border-b-2'>
        <Link href={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg text-white'>
                Pius's 
            </span>
            Blog
        </Link>

        <form>
            <TextInput type='text' placeholder='search...' rightIcon={AiOutlineSearch}  className='hidden lg:inline'></TextInput>
        </form>

        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 sm:inline' color='gray' onClick={handleClick}>
                {theme === 'light' ? <FaMoon/> : <FaSun/>}
            </Button>

            <SignedIn>
                <UserButton />
            </SignedIn>

            <SignedOut>
            <Link href='/sign-in'>
                <Button gradientDuoTone='purpleToBlue' as={'div'}>
                    <SignInButton/>
                </Button>
            </Link>
            </SignedOut>
            <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
            <Link href={'/'}>
                <Navbar.Link active={pathname === '/'} as={'div'}>
                    Home 
                </Navbar.Link>
            </Link>
            <Link href={'/about'}>
                <Navbar.Link active={pathname === '/about'} as={'div'}>
                    About
                </Navbar.Link>
            </Link>
           

            <Link href={'/projects'}>
                <Navbar.Link active={pathname === '/projects'} as={'div'}>
                    Projects
                </Navbar.Link>
            </Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header