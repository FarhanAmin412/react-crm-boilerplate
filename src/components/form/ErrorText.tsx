const ErrorText = ({ children }: { children?: string }) => (
  <>
    {children && (
      <p className="pt-1 mt-1 text-xs text-red-500 font-medium">{children}</p>
    )}
  </>
);

export default ErrorText;
