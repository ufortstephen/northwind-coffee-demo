type Props = { message: string; onClose: () => void };

export function Toast({ message, onClose }: Props) {
  return (
    <div className="toast" role="status">
      <span>{message}</span>
      <button className="link" onClick={onClose} aria-label="Dismiss notification">
        Dismiss
      </button>
    </div>
  );
}
