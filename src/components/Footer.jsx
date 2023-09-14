import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="about-us">
          <Typography variant="h6" className="text-secondary-color">
            About Us
          </Typography>
          <Typography variant="p" className="normal-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </div>

        <div className="about-us">
          <Typography variant="h6" className="text-secondary-color">
            Product
          </Typography>
          <ul>
            <li>Asian</li>
            <li>Cold Drink</li>
            <li>Cookies</li>
            <li>Dessert</li>
            <li>Eastern</li>
            <li>Hot Drink</li>
            <li>Junk Food</li>
            <li>Western</li>
          </ul>
        </div>

        <div className="about-us">
          <Typography variant="h6" className="text-secondary-color">
            About Us
          </Typography>
          <Typography variant="p" className="normal-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </div>
      </footer>
    </>
  );
}
