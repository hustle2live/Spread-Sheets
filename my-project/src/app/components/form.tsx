const FormElement: React.FC = () => {
   return (
      <form action='' className='flex flex-wrap bg-gray-100 space-y-4 p-4 w-2/5'>
         <h2 className='text-3xl font-bold underline'>Assigment Form </h2>
         <input type='text' name='name' className='w-full leading-10 px-4' placeholder='your name' />
         <input type='text' name='password' className='w-full leading-10 px-4' placeholder='your password' />
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus reprehenderit voluptas impedit, quam
            earum asperiores itaque officia magnam, quos corrupti nesciunt tenetur eos, excepturi dolores repudiandae
            dolorem ratione reiciendis cum.
         </p>
      </form>
   );
};

export { FormElement };
