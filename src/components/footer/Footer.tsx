import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      <div
        className="
          container mx-auto
          flex flex-col
          items-center
          text-center
          gap-3
          px-4
          py-5 sm:py-6
        "
      >
        <p className="text-base sm:text-lg font-medium">
          Farmácia Daniel Chaves
        </p>

        <p className="text-xs sm:text-sm text-teal-100">
          Acesse nossas redes sociais
        </p>

        <div className="flex gap-4">
          <InstagramLogo
            size={30}
            weight="bold"
            className="
              hover:text-teal-200
              cursor-pointer
              transition
            "
          />

          <LinkedinLogo
            size={30}
            weight="bold"
            className="
              hover:text-teal-200
              cursor-pointer
              transition
            "
          />

          <GithubLogo
            size={30}
            weight="bold"
            className="
              hover:text-teal-200
              cursor-pointer
              transition
            "
          />
        </div>

        <p className="text-xs sm:text-sm text-teal-100">
          © 2026 Farmácia Daniel
        </p>
      </div>
    </footer>
  );
}

export default Footer;