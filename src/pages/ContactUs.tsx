import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Htext from '../shared/Htext';
import { SelectedPage } from '../shared/types';
import ContactUsPageGraphic from '../assets/ContactUsPageGraphic.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const emailadress: string = process.env.REACT_APP_NOT_SECRET_EMAIL as string;
  const email: string = `https://formsubmit.co/${emailadress}`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onsubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const insputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 mb-5 placeholder-white`;

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          className='md:my-5 md:w-3/5'
        >
          <Htext>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </Htext>
          <p className='my-5 text-sm'>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='mt-10 basis-3/5 md:mt-0'
          >
            <form
              target='_blank'
              onSubmit={onsubmit}
              method='POST'
              action={email}
            >
              <input
                className={insputStyles}
                type='text'
                placeholder='NAME'
                {...register('name', { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' && 'Please pass in a name.'}
                  {errors.name.type === 'maxLength' && 'Max. 100 characters.'}
                </p>
              )}
              <input
                className={insputStyles}
                type='email'
                placeholder='EMAIL'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' &&
                    'Please pass in an email address.'}
                  {errors.email.type === 'pattern' &&
                    'Please pass in a valid email.'}
                </p>
              )}
              <textarea
                className={insputStyles}
                rows={4}
                cols={50}
                placeholder='Message'
                {...register('message', { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' &&
                    'Please pass in a message.'}
                  {errors.message.type === 'maxLength' &&
                    'Max. 2000 characters.'}
                </p>
              )}
              <button
                type='submit'
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='relative mt-16 basis-2/5 md:mt-0'
          >
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
              <img
                className='w-full "
                alt="contact-us-page-graphic'
                src={ContactUsPageGraphic}
                alt='girl doing yoga'
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
