'use client'
import { WereKnowStatus } from '@prisma/client'
import { FormikValues, useFormik } from 'formik'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

interface IFormInput {
    firstName: string
    lastName: string
    email: string
    birthday: string
    whereKnow: WereKnowStatus
}

const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('First Name is required'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    birthday: Yup.date()
        .nullable()
        .min(new Date(1930, 0, 1))
        .required('birthday is required'),
    whereKnow: Yup.string().oneOf(['SocialMedia', 'Friends', 'FoundMySelf']).required('Where did you hear this event is required'),
})

export default function FormRegistration() {
    const searchParams = useSearchParams()
    const idEvent = searchParams.get('id')
    const router = useRouter()

    const formik = useFormik<IFormInput>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            birthday: '',
            whereKnow: WereKnowStatus.FoundMySelf,
        },

        validationSchema: validationSchema,
        onSubmit: async (values: FormikValues) => {
            try {
                const body = new FormData()
                body.append('firstName', values.firstName)
                body.append('lastName', values.lastName)
                body.append('email', values.email)
                body.append('birthday', values.birthday)
                body.append('whereKnow', values.whereKnow)
                body.append('eventsId', idEvent as string)
                await fetch(`/api/eventRegistration/`, {
                    method: 'PUT',
                    body,
                }).then((res) => {
                    console.log('Responce registration form:', res)
                    if (!res.ok) {
                        throw new Error('REGISTRATION error')
                    }
                    toast.success('Registration Success!', {
                        onClose: () => {
                            console.log('will be redirected')
                            router.push('/')
                        },
                    })
                })
            } catch (e) {
                console.error('create registration error:', e), { status: 400 }
                toast.error('Registration Error!')
            } finally {
                console.log('finish submit')
            }
        },
    })

    return (
        <div className=" min-h-screen flex items-center">
            <div className="w-full">
                <h2 className="text-center text-primary font-bold  uppercase m-5">Fill out our form</h2>
                <div className=" p-10 rounded-lg border shadow md:w-3/4 mx-auto lg:w-1/2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label className="block mb-2 font-bold" htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                id="firstName"
                                name="firstName"
                                type="firstName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className="border  shadow p-3 w-full rounded "
                                placeholder="First Name"
                            />
                            {formik.touched.firstName && formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 font-bold " htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="lastName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className=" shadow p-3 w-full rounded "
                                placeholder="Last Name"
                            />
                            {formik.touched.lastName && formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 font-bold " htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Email"
                                className="shadow p-3 w-full rounded "
                            />
                            {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 font-bold " htmlFor="birthday">
                                Date of birth
                            </label>
                            <input
                                id="birthday"
                                name="birthday"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.birthday}
                                placeholder="date of birth"
                                className="border  shadow p-3 w-full rounded "
                            />
                            {formik.touched.birthday && formik.errors.birthday ? <div className="error">{formik.errors.birthday}</div> : null}
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 font-bold " htmlFor="howDidYouKnow">
                                Where did you hear about this event?
                            </label>
                            <div>
                                <fieldset>
                                    <label className="block mb-2 font-bold ">
                                        <input
                                            id="socialMedia"
                                            type="radio"
                                            name="whereKnow"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value="SocialMedia"
                                        />
                                        <i className="pl-2">Social media</i>
                                    </label>

                                    <label className="block mb-2 font-bold ">
                                        <input
                                            id="friends"
                                            type="radio"
                                            name="whereKnow"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value="Friends"
                                        />

                                        <i className="pl-2">Friends</i>
                                    </label>

                                    <label className="block mb-2 font-bold ">
                                        <input
                                            id="foundMyself"
                                            type="radio"
                                            name="whereKnow"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value="FoundMySelf"
                                        />
                                        <i className="pl-2">Found myself</i>
                                    </label>
                                    {formik.touched.whereKnow && formik.errors.whereKnow ? (
                                        <div className="error">{formik.errors.whereKnow}</div>
                                    ) : null}
                                </fieldset>
                            </div>
                        </div>
                        <button type="submit" className="block w-full bg-primary font-bold p-4 rounded-lg">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
