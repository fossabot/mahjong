'use client';

export function Button() {
  return (
    // eslint-disable-next-line no-alert
    <button type="button" onClick={() => alert('boop')}>
      Boop
    </button>
  );
}
