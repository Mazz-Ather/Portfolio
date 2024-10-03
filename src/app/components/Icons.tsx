import Image from "next/image";
import linkdin from "@/app/assests//linkedin.svg";
import facebook from "@/app/assests/facebook.svg";
import instagram from "@/app/assests/instagram.svg";
import gmail from "@/app/assests/gmail.svg";
import Link from "next/link";

const instagramURL = "https://www.instagram.com/maaz_ather_/"
const facebookURL  ="https://www.facebook.com/profile.php?id=100078787718681"
const linkdinProfileURL =
  "https://pk.linkedin.com/in/maaz-ather-a8252b291?trk=people-guest_people_search-card";
const icon = () => {
  return (
    <>
      {/* lindin icon  */}
      <Link href={linkdinProfileURL} target="_blank">
        <Image src={linkdin} width={50} height={50}  alt=" my linkdin account" />
      </Link>
        {/* facebook icon  */}
        <Link href={facebookURL} target="_blank">
        <Image src={facebook} width={50} height={50}  alt=" my linkdin account" />
      </Link>
        {/* instgram icon  */}
        <Link href={instagramURL} target="_blank">
        <Image src={instagram} width={50} height={50}  alt=" my linkdin account" />
      </Link>
        {/* gmail icon  */}
        <Link href={`mailto:mazzather@example.com`} target="_blank">
        <Image src={gmail} width={50} height={50}  alt=" my linkdin account" />
      </Link>
    </>
  );
};
export default icon;
