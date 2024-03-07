export function Error({ errorDetails }) {
  // Return error with error details
  return (
    <div className="error" data-testid="error">
      <h1>
        {errorDetails.status} | {errorDetails.statusText}{" "}
      </h1>
      <p>{errorDetails.message}</p>
    </div>
  );
}
