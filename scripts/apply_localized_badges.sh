#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

localize_page_badges() {
  local file_path="$1"
  local lang_code="$2"

  if [[ ! -f "$file_path" ]]; then
    return 0
  fi

  perl -0777 -i -pe "
    s#img/badges/app-store-badge\\.svg#img/badges/app-store-badge-${lang_code}.svg#g;
    s#img/badges/google-play-badge\\.svg#img/badges/google-play-badge-${lang_code}.svg#g;
  " "$file_path"
}

for lang in fr es pt vi; do
  localize_page_badges "$ROOT_DIR/apps/spelling-bee-amazing/about.${lang}.html" "$lang"
  localize_page_badges "$ROOT_DIR/apps/spelling-bee-amazing/install.${lang}.html" "$lang"
done

echo "Localized badge references applied for fr/es/pt/vi pages."
