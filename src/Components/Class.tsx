type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({
  name,
  description = 'No description available',
  image,
}: Props) => {
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px] '>
      <div className='p-5 absolute z-30 flex flex-col h-[380px] w-[450px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition duration-500 '>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  );
};

export default Class;
