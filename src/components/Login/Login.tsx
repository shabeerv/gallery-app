import './Login.css'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import FormInput from "../common/FormInput";
import { schema } from './validation';
// import { getUser } from '../../redux/Selectors';
import { useEffect } from 'react';
import { login, actionTypes as userActions } from '../../actions/userAction';
import { successSelector } from '../../selectors/statusSelector';
import { getLatestError } from '../../selectors/errorSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

const Login = () => {

    const isSuccess = useAppSelector((state) => successSelector([userActions.LOGIN], state))
    const isError = useAppSelector(getLatestError)
    const nextRoute = "/";
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            const email = values.email
            const password = values.password
            dispatch(login({ email, password }));
        }
    })
    
    useEffect(() => {
        if (isSuccess) {
            navigate(nextRoute);
        }
    }, [isSuccess])

    return (
        <div className="login">
            <div className="form">
                <form noValidate onSubmit={formik.handleSubmit}>
                    <span>Login</span>

                    <FormInput 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        type="email"
                        name="email"
                        className="form-control inp_text"
                    />

                    <p className="error">
                        {formik.errors.email && formik.touched.email && formik.errors.email}
                    </p>

                    <FormInput
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                    
                    <p className="error">
                        {formik.errors.password && formik.touched.password && formik.errors.password}
                        {/* {isError} */}
                        {isError && isError['message']}
                    </p>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login