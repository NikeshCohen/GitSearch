export function ProfileCard({ children }) {
  return (
    // Display profile, and its children{user details and user repos}
    <main className="content">
      <div className="profile-card">{children}</div>
    </main>
  );
}
