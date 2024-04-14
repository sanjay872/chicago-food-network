package chicago.foodnetworkbackend.service;

import chicago.foodnetworkbackend.dto.DonorDto;

public interface DonorService {
    Long createDonor(DonorDto donor);

    DonorDto getDonorById(long id);

    void updateDonor(DonorDto donorDto);
}
