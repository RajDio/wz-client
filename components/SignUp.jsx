import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp (props) {

	const { handleSubmit, register, formState: { errors } } = useForm();

	return (
		<form className="bg-dark-600 rounded-lg px-8 pt-6 pb-8 m-5 w-96" onSubmit={handleSubmit(props.onSubmit)}>
			<div className="mb-4">
				<label className="block text-white text-sm font-bold mb-2">Platform</label>
				<div className="relative">
					<select className="block appearance-none w-full bg-dark-900 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-purple-400" name="platform" {...register("platform", { required: true })}>
						<option value="psn">Playstation</option>
						<option value="xbl">Xbox Live</option>
						<option value="battle">Battle.net</option>
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
						<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<label className="block text-white text-sm font-bold mb-2">Phone Number</label>
				<input className="block appearance-none text-white w-full bg-dark-900  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-purple-400 placeholder-purple-400 mb-3" name="phoneNumber" {...register("phoneNumber", { required: true })} placeholder="(973) 555-0808" />
				{errors.phoneNumber && <p className="text-red-500 text-xs italic">Please enter a valid phone number.</p>}
			</div>
			<div className="mb-6">
				<label className="block text-white text-sm font-bold mb-2">Username</label>
				<input className="block appearance-none text-white w-full bg-dark-900 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-purple-400 placeholder-purple-400 mb-3" name="username" {...register("username", { required: true })} placeholder="************"/>
				{errors.username && <p className="text-red-500 text-xs italic">Please enter a valid username.</p>}
			</div>
			<div className="flex items-center justify-center">
				<button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Sign Up
				</button>
			</div>
	  	</form>
	)
}