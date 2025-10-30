import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormSection, FormSubmit, Input } from '../components/Form';

//* Zod Schema
const TestSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  password: z.string().min(8, 'Password is too short'),
});

type TTestSchema = z.infer<typeof TestSchema>;

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTestSchema>({
    resolver: zodResolver(TestSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="py-2 text-center">Reusable Form</h1>

      {/* Reusable Form */}
      <Form
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
        double={true}
      >
        <FormSection>
          <Input
            label="Name"
            type="text"
            name="name"
            register={register('name')}
            errors={errors}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            register={register('email')}
            errors={errors}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            register={register('password')}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default About;
