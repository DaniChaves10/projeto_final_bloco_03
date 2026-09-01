import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white">

      <div className="
        container mx-auto
        flex flex-col
        items-center
        gap-3
        py-6
      ">

        <p className="font-medium">
          Farmácia Daniel Chaves
        </p>

        <p className="text-sm">
          Acesse nossas redes sociais
        </p>

        <div className="flex gap-4">

          <InstagramLogo
            size={32}
            weight="bold"
            className="hover:text-teal-200 cursor-pointer"
          />

          <LinkedinLogo
            size={32}
            weight="bold"
            className="hover:text-teal-200 cursor-pointer"
          />

          <GithubLogo
            size={32}
            weight="bold"
            className="hover:text-teal-200 cursor-pointer"
          />

        </div>

        <p className="text-sm">
          © 2026 Farmácia Daniel
        </p>

      </div>

    </footer>
  );
}

export default Footer;