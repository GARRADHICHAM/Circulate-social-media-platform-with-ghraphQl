

const style = {
  wrapper: 'flex items-center space-x-2 divide-x divide-[#343536]',
  iconsLeft: 'flex items-center ',
  iconsRight: 'flex items-center space-x-2 ',
  PostBtn:
    'border border-[#343536] flex items-center w-8 h-8 space-x-1 rounded-md  text-gray-800',
  LogBtn:
    ' flex items-center space-x-1 rounded-md py-1 pl-2 pr-4 text-gray-800',
  smallText: 'text-sm',
  dollarIcon: 'h-4 w-4',
  userIcon: 'h-6 w-6',
  userBtn:
    ' flex items-center space-x-1 rounded-full  bg-[#9E9E9E]',

}

const Icons = () => {

 
  return (
    <>
     
        <div classNameNameName={style.wrapper}>


          <div classNameNameName={style.iconsRight}>
            {/* <AppDown /> */}
            
            <button
          type="button"
          
          data-te-ripple-init
          data-te-ripple-color="light"
          classNameNameName=" inline-block rounded sm:px-6 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-cyan-500 transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
          Login
        </button>
            
        
              {/* <button classNameNameName="btn btn-outline btn-md btn-info ">Sign up for free</button> */}
              <button type="button" classNameNameName="text-white bg-gradient-to-r from-cyan-500 mt-1 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm sm:px-5 px-3 py-1.5 sm:py-2.5text-center me-2 mb-2">Sign up</button>

           
          </div>
        </div>
      
    </>
  )

}



export default Icons
