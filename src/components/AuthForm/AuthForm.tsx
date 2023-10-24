interface AuthFormProps {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>;
  children: React.ReactNode;
}

function AuthForm({ onSubmit, children }: AuthFormProps) {
  return (
    <form className="auth-form" noValidate={true} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default AuthForm;
