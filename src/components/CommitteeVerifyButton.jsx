export default function CommitteeVerifyButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="
        px-5 py-2.5 
        rounded-xl
        bg-gradient-to-r from-blue-600 to-blue-700
        text-white font-semibold
        shadow-md hover:shadow-lg
        hover:from-blue-700 hover:to-blue-800
        transition-all duration-200
        border border-blue-500/30
        flex items-center gap-2
      "
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 text-white opacity-90'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>

      ตรวจสอบสถานะการยืนยัน
    </button>
  );
}
