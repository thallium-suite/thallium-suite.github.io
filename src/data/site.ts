/**
 * Single source of truth for landing-page content.
 *
 * Swap these values for your real image catalogue — the hero card stack,
 * the feature grid and the stats bar all read from here.
 */

export type ImageEntry = {
  /** Registry reference, e.g. `ghcr.io/thallium-suite/workstation`. */
  readonly ref: string;
  readonly name: string;
  readonly tagline: string;
  /** Drives the card accent + badge colour. */
  readonly accent: 'blue' | 'teal' | 'coral' | 'yellow' | 'violet' | 'pink' | 'green';
  /** Key into `ImageIcon` in components/ImageIcon.astro */
  readonly icon: 'monitor' | 'terminal' | 'palette' | 'server' | 'gamepad' | 'shield';
  readonly size: string;
  readonly arches: readonly string[];
};

/**
 * Order matters: this is the draw order of the hero card stack,
 * back of the deck first.
 */
export const images: readonly ImageEntry[] = [
  {
    ref: 'ghcr.io/thallium-suite/lithium',
    name: 'Lithium',
    tagline:
      'Lightweight server for the homelab. CentOS Stream 10 base with the coreos-stable kernel. Optional sysexts for k0s, KubeStellar and Docker.',
    accent: 'yellow',
    icon: 'server',
    size: '1.4 GB',
    arches: ['x86_64', 'aarch64'],
  },
  {
    ref: 'ghcr.io/thallium-suite/uranium',
    name: 'Uranium',
    tagline:
      'LTS desktop on CentOS Stream 10.',
    accent: 'green',
    icon: 'shield',
    size: '1.8 GB',
    arches: ['x86_64', 'aarch64'],
  },
] as const;

/** Hero card-stack transform: back card first, front card last. */
export const stackOrder = images;

/** Technology the images are genuinely built on. Wordmarks, not fake partners. */
export const foundations: readonly { readonly name: string; readonly note: string }[] =
  [
    { name: 'bootc', note: 'OCI-native image builder' },
    { name: 'OSTree', note: 'Atomic filesystem updates' },
    { name: 'rpm-ostree', note: 'Layered package commits' },
    { name: 'systemd', note: 'Service supervision' },
    { name: 'OCI', note: 'Registry-native artifacts' },
    { name: 'Podman', note: 'Rootless containers' },
  ] as const;

export const stats: readonly { readonly value: string; readonly label: string }[] = [
  { value: '2', label: 'Images published' },
  { value: '< 8s', label: 'Median rollback' },
  { value: '100%', label: 'Rebootless updates' },
  { value: '0', label: 'Unsupported CVEs older than 24h' },
] as const;

/** FEATURE GRID */
export const features: readonly {
  readonly title: string;
  readonly body: string;
  readonly accent: ImageEntry['accent'];
}[] = [
  {
    title: 'Atomic by default',
    body: 'Every image is a bootc container with an OSTree-backed root. Updates land as a new snapshot; the old one stays one boot away.',
    accent: 'blue',
  },
  {
    title: 'One command to start',
    body: 'Point any standards-compliant tool at the registry. No cloud account, no golden image to babysit, no bespoke bootstrap script.',
    accent: 'teal',
  },
  {
    title: 'Roll back in a keypress',
    body: 'If an update misbehaves you pick the previous deployment from the bootloader. Recovery is a menu entry, not a reinstall.',
    accent: 'yellow',
  },
  {
    title: 'Reproducible layers',
    body: 'Layer contents are declared, not accumulated. Two builds of the same commit produce the same digest — diffable, cacheable, auditable.',
    accent: 'violet',
  },
  {
    title: 'Signed and verifiable',
    body: 'Every published digest carries a signature you can verify before it reaches a machine. Supply-chain checks are not opt-in.',
    accent: 'coral',
  },
  {
    title: 'Sandbox everything',
    body: 'Podman ships in the base image with rootless mode on by default, so day-to-day development never needs elevated privilege.',
    accent: 'pink',
  },
] as const;

export const faqs: readonly { readonly q: string; readonly a: string }[] = [
  {
    q: 'What exactly is an "atomic" image here?',
    a: 'A bootc-built OCI artifact whose root filesystem is managed by OSTree. You get a read-only base that is updated by swapping snapshots instead of mutating packages in place.',
  },
  {
    q: 'Do I need a tool I have never heard of?',
    a: 'No. Your image is a standard OCI artifact. Pull it with podman or docker, then write it to disk with bootc — the same tool Fedora is adopting for Hummingbird, and already used by its bootc images. If you can run a container, you can install an OS.',
  },
  {
    q: 'Can I still install packages?',
    a: 'Yes — Homebrew installs into your persistent home directory, so whatever you brew survives an update. Your home partition lives outside the immutable OSTree layers, so your packages and configurations do not disappear on the next boot.',
  },
  {
    q: 'How does this differ from a normal distro?',
    a: 'A normal distro is a mutable tree you patch in place. These are versioned artifacts you pin. Same machine, different failure model.',
  },
] as const;

/**
 * PLACEHOLDER TESTIMONIALS — replace with real quotes before launch.
 * Handles only, no photos, no invented full names.
 */
export const reviews: readonly { readonly quote: string; readonly handle: string }[] = [
  {
    quote:
      'it works!',
    handle: 'YOU! (please send us a review or feedback)',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia ut ante ultricies tempus. Nulla facilisi. Nulla ipsum velit, tincidunt sit amet fringilla vitae, egestas ac elit. Fusce in rutrum sapien. Aenean hendrerit ac leo fermentum tempus. Vivamus vulputate scelerisque mi sed pharetra. Suspendisse iaculis ipsum eget tellus hendrerit, non maximus nibh ullamcorper. Aenean commodo elementum dolor. Nam tristique diam lectus, et mollis mi varius non. Mauris a purus non mauris ultrices scelerisque. Suspendisse ac lacinia massa.',
    handle: 'random latin speaker (we do not know what it means)',
  },
] as const;
