import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { LOGO } from '../utils/constants';
import Error from './Error';

const FooterLinkSection = ({ title, links }) => (
  <div>
    <h3 className='text-2xl font-semibold'>{title}</h3>
    <ul className='mt-4 space-y-3 md:space-y-4'>
      {links.map((link, index) => (
        <li key={index} className='capitalize'>
          <Link to={link.path} className='text-base cursor-pointer'>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const solutionsLinks = [
    { path: '/', label: 'Employers & HR' },
    { path: '/', label: 'Consultants' },
    { path: '/', label: 'Life Insurance Carriers' },
    { path: '/', label: 'Health Plans' },
    { path: '/', label: 'Families' },
  ];

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <footer className='relative bg-white border-t lg:border-none max-h-fit'>
      <div className='max-w-7xl mx-auto py-10 px-8 lg:px-10 lg:py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10 col-span-2'>
            <FooterLinkSection title="Solutions" links={solutionsLinks} />
            <FooterLinkSection title="Solutions" links={solutionsLinks} />
            <FooterLinkSection title="Solutions" links={solutionsLinks} />
          </div>
          <hr className='my-10 bg-black md:hidden' />
          <div className='flex flex-col col-span-2 lg:col-span-1'>
            {/* newsletters */}
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="max-w-md md:mt-10 lg:mt-0">
                  <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="text-xl font-medium mb-2">Subscribe For Newsletter</label>
                    <div className="grid grid-cols-3 gap-3">
                      <div className={`col-span-2 flex items-center bg-gray-100 rounded-md border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 ml-3 text-gray-400" viewBox="0 0 24 24" strokeWidth="2" stroke="#6b7280" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                          <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="py-3 pl-4 pr-3 w-full bg-transparent text-gray-900 focus:outline-none rounded-r-md"
                          placeholder="example@domain.com"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 text-center text-white py-3 px-5 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </div>
                    {/* Show error message only when touched */}
                    {touched.email && errors.email && (
                      <Error error={errors.email} />
                    )}
                  </div>
                </Form>
              )}
            </Formik>

            {/* social media */}
            <div className='flex justify-start items-center gap-5'>
              <Link to="/">
                <svg width="40" height="40" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="17" fill="#1E1928"></circle><path d="M17.53 17.7415V21.6728H16.2462L16.2481 21.2269C16.251 20.5024 16.2546 19.528 16.2569 18.529C16.2602 17.1421 16.2614 15.6844 16.2549 14.7917H17.53V15.0015L16.8604 16.0059H18.1656C17.9416 16.2492 17.7803 16.5248 17.6768 16.7822C17.5455 17.1068 17.53 17.4836 17.53 17.7415ZM19.8023 15.2937C19.5305 15.2937 19.2853 15.337 19.0656 15.4119C19.1967 15.2385 19.3507 15.074 19.5465 14.9384C19.8144 14.7529 20.2 14.5941 20.7916 14.5941C21.5409 14.5941 22.1271 14.8347 22.5318 15.2736C22.9419 15.7184 23.25 16.459 23.25 17.6167V21.6728H21.9641V17.9378C21.9641 17.3067 21.8548 16.6576 21.5062 16.1462C21.125 15.5869 20.5276 15.2937 19.8023 15.2937ZM11.75 11.4482C11.75 11.2342 11.8278 11.0728 11.9456 10.9617C12.0648 10.8493 12.2674 10.75 12.5769 10.75C12.885 10.75 13.075 10.8478 13.1858 10.9551C13.2968 11.0624 13.3786 11.2273 13.3856 11.4563C13.3836 11.662 13.3082 11.8225 13.1924 11.9337C13.0757 12.0458 12.8751 12.1477 12.5587 12.1477H12.5405C12.0021 12.1477 11.75 11.8223 11.75 11.4482ZM13.2023 14.7917V21.6728H11.9151V14.7917H13.2023Z" fill="white" stroke="white" strokeWidth="1.5"></path></svg>
              </Link>
              <Link to="/">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1002_1105)"><path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#1E1928"></path><path d="M23.0677 20.076L28.4484 14H25.5167L21.7668 18.2347L18.7711 14H13.3083L18.7289 21.6635L13.1177 28H16.0505L20.0321 23.5037L23.2126 28H28.6744L23.0677 20.076ZM17.5752 15.6551L25.2965 26.3837H24.3972L16.6759 15.6551H17.5752Z" fill="white"></path></g><defs><clipPath id="clip0_1002_1105"><rect width="42" height="42" fill="white"></rect></clipPath></defs></svg>
              </Link>
              <Link to="/">
                <svg width="40" height="40" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="17" fill="#1E1928"></circle><path d="M16.9981 13.4083C15.0106 13.4083 13.4065 15.0124 13.4065 17C13.4065 18.9876 15.0106 20.5917 16.9981 20.5917C18.9857 20.5917 20.5897 18.9876 20.5897 17C20.5897 15.0124 18.9857 13.4083 16.9981 13.4083ZM16.9981 19.3343C15.7128 19.3343 14.6638 18.2854 14.6638 17C14.6638 15.7146 15.7128 14.6657 16.9981 14.6657C18.2835 14.6657 19.3324 15.7146 19.3324 17C19.3324 18.2854 18.2835 19.3343 16.9981 19.3343ZM20.7368 12.4242C20.2728 12.4242 19.898 12.7989 19.898 13.263C19.898 13.727 20.2728 14.1018 20.7368 14.1018C21.2009 14.1018 21.5756 13.7288 21.5756 13.263C21.5758 13.1528 21.5542 13.0436 21.5121 12.9418C21.47 12.84 21.4082 12.7475 21.3303 12.6695C21.2523 12.5916 21.1598 12.5298 21.058 12.4877C20.9562 12.4456 20.847 12.424 20.7368 12.4242ZM23.9992 17C23.9992 16.0333 24.008 15.0754 23.9537 14.1105C23.8994 12.9898 23.6437 11.9951 22.8242 11.1756C22.0029 10.3543 21.01 10.1003 19.8893 10.0461C18.9226 9.99176 17.9648 10.0005 16.9999 10.0005C16.0332 10.0005 15.0754 9.99176 14.1105 10.0461C12.9897 10.1003 11.9951 10.356 11.1755 11.1756C10.3543 11.9969 10.1003 12.9898 10.0461 14.1105C9.99177 15.0772 10.0005 16.0351 10.0005 17C10.0005 17.9649 9.99177 18.9246 10.0461 19.8895C10.1003 21.0102 10.356 22.0049 11.1755 22.8244C11.9968 23.6457 12.9897 23.8997 14.1105 23.9539C15.0771 24.0082 16.035 23.9995 16.9999 23.9995C17.9665 23.9995 18.9244 24.0082 19.8893 23.9539C21.01 23.8997 22.0047 23.644 22.8242 22.8244C23.6455 22.0031 23.8994 21.0102 23.9537 19.8895C24.0097 18.9246 23.9992 17.9667 23.9992 17ZM22.4582 21.1293C22.3304 21.448 22.1763 21.6862 21.9294 21.9313C21.6824 22.1782 21.446 22.3324 21.1273 22.4602C20.2062 22.8262 18.019 22.7439 16.9981 22.7439C15.9772 22.7439 13.7883 22.8262 12.8672 22.4619C12.5484 22.3341 12.3103 22.18 12.0651 21.9331C11.8182 21.6862 11.6641 21.4498 11.5363 21.131C11.172 20.2082 11.2543 18.0209 11.2543 17C11.2543 15.9791 11.172 13.7901 11.5363 12.869C11.6641 12.5502 11.8182 12.3121 12.0651 12.0669C12.312 11.8218 12.5484 11.6659 12.8672 11.5381C13.7883 11.1738 15.9772 11.2561 16.9981 11.2561C18.019 11.2561 20.208 11.1738 21.1291 11.5381C21.4478 11.6659 21.6859 11.82 21.9311 12.0669C22.178 12.3138 22.3321 12.5502 22.46 12.869C22.8242 13.7901 22.7419 15.9791 22.7419 17C22.7419 18.0209 22.8242 20.2082 22.4582 21.1293Z" fill="white"></path></svg>
              </Link>
              <Link to="/">
                <svg width="40" height="40" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="17" fill="#1E1928"></circle><path d="M15.2847 12.4687V14.2237H14V16.3687H15.2847V22.7451H17.9255V16.3687H19.697C19.697 16.3687 19.864 15.3402 19.9443 14.2148H17.9357V12.7491C17.9357 12.5286 18.2237 12.2342 18.5092 12.2342H19.9468V10H17.9905C15.2197 10 15.2847 12.1475 15.2847 12.4687Z" fill="white"></path></svg>
              </Link>
            </div>
          </div>
        </div>
        <hr className='bg-black my-5' />
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mt-8 max-h-fit">
          <h1 className="text-5xl lowercase font-semibold font-serif text-black">{LOGO}</h1>
          <div className="max-w-xl flex flex-wrap gap-3 mt-3 sm:mt-0">
            <Link to="/" className="text-gray-600 hover:text-blue-500">Terms & Conditions</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-500">Privacy Policy</Link>
            <p className="text-gray-500 text-sm col-span-2 sm:col-span-1 inline-block">&copy; 2024-2026 esyfy. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;