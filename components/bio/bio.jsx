import Image from 'next/image';

const Bio = () => (
  <aside>
    <h2>About the Author</h2>
    <Image
      src="/images/portrait-avatar.jpg"
      height={144}
      width={144}
      alt="Phillip Luther, sole author and contributor to The Principled Engineer"
    />
    <p>
      Lorem ipsum, dolor sit amet, and all the usual yada yada yada. This'll be a legit bio someday.
    </p>
  </aside>
);

export default Bio;
