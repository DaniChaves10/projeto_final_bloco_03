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
          <a
          href="https://instagram.com/daniel_chaves20"
          target="_blank"
          rel="noopener noreferrer"
          >
          <InstagramLogo
            size={30}
            weight="bold"
            className="
              hover:text-teal-200
              cursor-pointer
              transition
            "
          />
          </a>
          <a
          href="https://www.linkedin.com/in/daniel-araujo10/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <LinkedinLogo
            size={30}
            weight="bold"
            className="
              hover:text-teal-200
              cursor-pointer
              transition
            "
          />
          </a>
          <a
          href="https://github.com/DaniChaves10"
          target="_blank"
          rel="noopener noreferrer"
          >
          <GithubLogo
            size={30}
            weight="bold"
            className="
              hover:text-teal-200
              cursor-pointer
              transition
            "
          />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-teal-100">
          © 2026 Farmácia Daniel
        </p>
      </div>
    </footer>
  );
}

export default Footer;