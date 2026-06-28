export default function Footer() {
  return (
    <footer className="flex justify-center py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="flex items-center justify-center max-w-4xl w-full">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nguyen Viet Thanh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
