"use client"

import { useState } from "react"
import Logo from "@assets/icons/solid/nek-logo.svg"
import LocaleSelector from "./locale-selector"

export default function MobileHeader() {

	const [open, setOpen] = useState(false)

	function toggleMenu() {
		setOpen(!open)
	}

	return (
		<header className={`mobile-menu`} data-open={open}>

			<div className="mobile-menu__bar">

				<div className="mobile-menu__logo">
					<Logo />
				</div>

				<div className="mobile-menu__actions">

					{open && <LocaleSelector />}

					<button
						className="mobile-menu__toggle"
						onClick={toggleMenu}
						aria-label="menu"
					>
						<span />
						<span />
					</button>

				</div>

			</div>


			<nav className="mobile-menu__panel">

				<div className="mobile-menu__section mobile-menu__categories">
					<a href="#">Category 1</a>
					<a href="#">Category 2</a>
					<a href="#">Category 3</a>
				</div>

				<div className="mobile-menu__section mobile-menu__secondary">
					<a href="#">Resume</a>
					<a href="#">Contact</a>
				</div>

				<div className="mobile-menu__section mobile-menu__language">
					<a href="#">EN</a>
					<a href="#">FR</a>
				</div>

			</nav>

		</header>
	)
}
