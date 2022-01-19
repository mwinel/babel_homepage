import ContentPanel from '../ContentPanel/ContentPanel';
import Logo from '../Logo/Logo';
import Divider from '../Divider/Divider';
import FooterLink from '../FooterLink/FooterLink';
import SocialIcon from '../SocialIcon/SocialIcon';

export default function Footer() {
    return (
        <div className="py-20">
            <ContentPanel>
                <div className="space-y-4 md:flex md:justify-between md:items-center md:space-y-0">
                    <div className="md:w-[20%]">
                        <Logo footerLogo={true} />
                    </div>
                    <div className="flex flex-col md:space-x-6 md:w-[60%] md:flex-row md:justify-center md:items-center">
                        <FooterLink
                            href="/terms-of-service"
                            title="Terms of Service"
                        />
                        <FooterLink
                            href="/privacy-policy"
                            title="Privacy Policy"
                        />
                        <FooterLink
                            href="/documentation"
                            title="Documentation"
                        />
                    </div>
                    <div className="space-x-3 md:w-[20%] flex md:justify-end md:items-center">
                        <SocialIcon href="/" src="/images/instagram_icon.svg" />
                        <SocialIcon href="/" src="/images/twitter_icon.svg" />
                        <SocialIcon href="/" src="/images/linkedin_icon.svg" />
                    </div>
                </div>
                {/* Divider */}
                <Divider />
                {/* Copyright text */}
                <div className="flex items-center justify-center">
                    <p className="text-neutral-600 font-medium tracking-wide">
                        Copyright @ BABEL 2022
                    </p>
                </div>
            </ContentPanel>
        </div>
    );
}
