export function getStatus(value: string) {
  switch (value) {
    case "Processing":
      return "green";
    case "Approved":
      return "#108ee9";
    case "On Shipping":
      return "#87d068";
    case "Shipped":
      return "cyan";
    case "Completed":
      return "green";
    case "Returned":
      return "red";

    case "Pending":
      return "yellow";
    default:
      return "default";
  }
}
