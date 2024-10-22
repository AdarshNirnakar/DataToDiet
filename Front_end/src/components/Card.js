// Card.js
export const Card = ({ children }) => (
    <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
  );
  
  // CardHeader.js
  export const CardHeader = ({ children, className }) => (
    <div className={`border-b pb-4 mb-4 ${className}`}>{children}</div>
  );
  
  // CardContent.js
  export const CardContent = ({ children }) => (
    <div className="">{children}</div>
  );
  
  // CardTitle.js
  export const CardTitle = ({ children }) => (
    <h2 className="text-lg font-bold">{children}</h2>
  );
  