import { useState } from 'react'

function Form( {onSuccess} ) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);

    const validateEmail = (value) => {

        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailValid(isValid);
        return isValid;
    };

    const vaildatePassword = (value) => {

        const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        setPasswordValid(isValid);
        return isValid;
    };

    const handelForm = (e) => {
        e.preventDefault();

        const isEmailOk = validateEmail(email);
        const isPasswordOk = vaildatePassword(password);

        if (isEmailOk && isPasswordOk) {
            onSuccess();
        } else {
            console.log("please fix the log credentials validation.");
        }

        setEmail("");
        setPassword("");
    };


  return (
    <div>
      <form 
      onSubmit={handelForm}
      className='p-[2.4rem] w-full sm:w-[70vmin] bg-white border-2 border-neutral-100 rounded-2xl shadow-neutral-200 shadow-2xl'>

        <div className='w-full flex items-center justify-center'>
            <div className='h-[80px] w-[80px] border-2 border-neutral-100 rounded-2xl overflow-hidden shadow-xl shadow-neutral-200 '>
                <img src="https://plus.unsplash.com/premium_vector-1724057102241-a7241645075e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxpbGx1c3RyYXRpb258ZW58MHx8MHx8fDA%3D" alt="" className='h-full w-full object-cover object-center' />
            </div>
        </div>
        
        <div className='text-center mt-[1.5rem]'>
            <h2 className='text-2xl font-semibold text-neutral-900'>Yooo, welcome back!</h2>
            <p className='mt-1 text-sm font-semibold text-neutral-500'>First time here? <span className='text-neutral-800 cursor-pointer'>Sign up for free</span></p>
        </div>

        <div className='mt-8'>
            <input 
            type="text" 
            placeholder='Your email' 
            className='py-2 px-3 text-md w-full border-2 border-neutral-200 rounded-xl outline-none placeholder:text-neutral-400'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
            }}
            />

            {
                emailValid === false ? <div className='w-full'>
                        <p className='text-sm text-red-500 mt-2'>Email format is not valied</p>
                    </div> : ""
            }

            <input 
            type="password" 
            placeholder='password' 
            className='py-2 px-3 mt-4 text-md w-full border-2 border-neutral-200 rounded-xl outline-none placeholder:text-neutral-400'
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                vaildatePassword(e.target.value);
            }}
            />

            {
                passwordValid === false ? <div className='w-full'>
                            <p className='text-sm text-red-500 mt-2'>Your password must be at least 8 character long with symbol and include both letters and numbers</p>
                        </div> : ""

            }

            <button className='w-full mt-4 text-md py-2 bg-neutral-900 text-white rounded-xl cursor-pointer'>Send me the magic link</button>

            <p className='mt-6 text-sm font-semibold text-neutral-800 cursor-pointer text-center'>Sign in using password</p>
        </div>

        <div className='w-full mt-8  text-center'>
            <div className='w-full h-[2px] bg-neutral-200'></div>
            <span className='text-neutral-400 left-1/2 right-1/2 '>or</span>
        </div>

        <div className='w-full mt-8'>
            <button className='w-full py-2 border-2 border-neutral-200 rounded-2xl text-md font-semibold cursor-pointer'>Single sign-on (SSO)</button>
        </div>

        <div className='w-full mt-6 text-center'>
            <p className='text-xs text-neutral-400 font-semibold'>You acknowledge that you read, and agree, to our <span className='underline'>Terms of Service</span> and our <span className='underline'>Privavy Policy</span></p>
        </div>

      </form>
    </div>
  )
}

export default Form
